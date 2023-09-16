import { ShopItem, ShopTypes } from '../models/Models.js';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class shopItemController {
	async create(req, res) {
		try {
			let { title, price, shopTypeId, description } = req.body;

			if (!title || !price || !description) {
				return res.status(400).json({
					message: 'Please field all',
				});
			}

			if (!shopTypeId) {
				return res.status(400).json({
					message: 'Please select Type',
				});
			}

			if (!req.files.image) {
				return res.status(400).json({
					message: 'Pleasa import image',
				});
			}

			const { image } = req.files;
			let fileName = uuidv4() + '.jpg';
			image.mv(path.resolve(__dirname, '..', 'assets/static/image', fileName));

			const shopItem = await ShopItem.create({
				title,
				price,
				shopTypeId,
				description,
				img: fileName,
			});

			await ShopTypes.findOneAndUpdate(shopTypeId, {
				$push: { shopItemId: shopItem },
			});

			return res.status(200).json({ shopItem, message: 'Shop item created' });
		} catch (e) {
			console.log(e);
			res.status(500).json({ message: 'Server error' });
		}
	}

	async getAll(req, res) {
		try {
			let { shopTypeId, limit, page } = req.query;
			page = page || 1;
			limit = limit || 9;
			let offset = page * limit - limit;

			let shopItems;
			if (shopTypeId) {
				shopItems = await ShopItem.find({ shopTypeId })
					.limit(limit)
					.skip(offset);
			} else {
				shopItems = await ShopItem.find({}).limit(limit).skip(offset);
			}

			return res.status(200).json({ shopItems, message: 'All worked' });
		} catch (e) {
			res.status(500).json({ message: 'Server error' });
		}
	}

	async getOne(req, res) {
		try {
			const { id } = req.params;
			const shopItem = await ShopItem.findOne({ _id: id });
			if (!shopItem) {
				return res.status(404).json({ message: 'Server error' });
			}

			return res.status(200).json(shopItem);
		} catch (e) {
			res.status(500).json({ message: 'Server error' });
		}
	}

	async removeShop(req, res) {
		try {
			const { id } = req.params;

			const shop = await ShopItem.findById(id);

			if (shop) {
				console.log(shop.img);
				await fs.unlink(`assets/static/image/${shop.img}`, (err) => {
					if (err) {
						res.status(400);
					}
					console.log('Файл успешно удалён');
				});
			}

			await ShopItem.findByIdAndDelete(id);
			const shopTypes = await ShopTypes.findByIdAndUpdate(shop.shopTypeId, {
				$pull: { shopItemId: shop._id },
			});
		} catch (e) {
			res.status(500).json({ message: 'Server error' });
		}
	}
}

export default new shopItemController();
