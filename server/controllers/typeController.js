import { Type } from "../models/Models.js";

class typeController {
	async create(req, res) {
		try {
			const { name } = req.body;

			if (!name) {
				return res.status(400).json({
					message: "Please field type name",
				});
			}
			const type = await Type.create({ name });
			return res.status(200).json({
				type,
				message: `Type ${type.name} created`,
			});
		} catch (e) {
			res.status(500).json({ message: "Error create" });
		}
	}

	async getAll(req, res) {
		try {
			const types = await Type.find({});
			return res.json({ types });
		} catch (e) {
			res.status(500).json({ message: "Error create" });
		}
	}
}

export default new typeController();
