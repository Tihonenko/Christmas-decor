import { Basket, Decor, ShopItem } from '../models/Models.js';

class basketConroller {
	async addDecorItem(req, res) {
		try {
			const { _id } = req.body;

			if (_id) {
				const decor = await Decor.findById(_id);
				const basket = await Basket.findOneAndUpdate(
					{ userId: req.userId },
					{
						$push: { basketDecorId: decor },
					}
				);

				return res
					.status(200)
					.json({ decor, message: 'Item add in your basket' });
			}
			return res.json({ messaga: 'Item not found' });
		} catch (e) {
			res.status(500).json({
				messaga: 'Server error',
			});
		}
	}
	async addShopItem(req, res) {
		try {
			const { _id } = req.body;

			if (_id) {
				const shopItem = await ShopItem.findById(_id);
				const basket = await Basket.findOneAndUpdate(
					{ userId: req.userId },
					{
						$push: { basketShopItemsId: shopItem },
					}
				);

				return res
					.status(200)
					.json({ shopItem, message: 'Item add in your basket' });
			}

			return res.json({ messaga: 'Item not found' });
		} catch (e) {
			console.log(e);
			res.status(500).json({
				messaga: 'Server error',
			});
		}
	}

	async getBasket(req, res) {
		const basket = await Basket.findOne({ userId: req.userId });

		const listDecor = await Promise.all(
			basket.basketDecorId.map((decor) => {
				return Decor.findById(decor._id);
			})
		);

		const listShopItem = await Promise.all(
			basket.basketShopItemsId.map((shop) => {
				return ShopItem.findById(shop._id);
			})
		);

		const list = [].concat(listDecor, listShopItem);

		return res.json(list);
	}

	async removeBasketItem(req, res) {
		try {
			const { id } = req.params;

			if (id) {
				await Basket.findOneAndUpdate(
					{ userId: req.userId },
					{
						$pull: { basketDecorId: id },
						// $pull: { basketShopItemsId: id },
					}
				);
				await Basket.findOneAndUpdate(
					{ userId: req.userId },
					{
						$pull: { basketShopItemsId: id },
					}
				);

				return res.json({ messaga: 'Item deleted' });
			} else {
				return res.json({ messaga: 'Error' });
			}
			return res.json({ messaga: 'Item deleted' });
		} catch (e) {
			return res.status(500).json({ messagate: 'Server error' });
		}
	}
}

export default new basketConroller();
