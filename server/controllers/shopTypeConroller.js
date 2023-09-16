import { ShopTypes } from '../models/Models.js';

class typeController {
	async create(req, res) {
		try {
			const { name } = req.body;
			const shopType = await ShopTypes.create({ name });

			if (!name) {
				return res.status(400).json({
					message: 'Please field type name',
				});
			}

			return res.status(200).json({
				shopType,
				message: `Type ${shopType.name} was created`,
			});
		} catch (e) {
			res.status(500).json({ message: 'Error create' });
		}
	}

	async getAll(req, res) {
		try {
			const shopTypes = await ShopTypes.find({});
			return res.json({ shopTypes });
		} catch (e) {
			res.status(500).json({ message: 'Error getting' });
		}
	}
}

export default new typeController();
