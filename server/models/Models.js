import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema(
	{
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		role: { type: String, default: 'USER' },
		basket: { type: mongoose.Schema.Types.ObjectId, ref: 'basket' },
	},
	{ timestamps: true }
);

const BasketSchema = new mongoose.Schema({
	basketDecorId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'decor' }],
	basketShopItemsId: [
		{ type: mongoose.Schema.Types.ObjectId, ref: 'shopItem' },
	],
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
});

const BasketDecorSchema = new mongoose.Schema({
	basketId: { type: mongoose.Schema.Types.ObjectId, ref: 'basket' },
	itemId: { type: mongoose.Schema.Types.ObjectId, ref: 'decor' },
});

const DecorSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	price: { type: String, required: true },
	img: { type: String, required: true },

	basketDecorId: { type: mongoose.Schema.Types.ObjectId, ref: 'basket' },
	typesId: { type: mongoose.Schema.Types.ObjectId, ref: 'type' },
});

const TypesSchema = new mongoose.Schema({
	name: { type: String, unique: true },
	decorId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'decor' }],
});

const ShopItemSchema = new mongoose.Schema({
	title: { type: String, required: true, unique: true },
	description: { type: String, required: true },
	price: { type: String, required: true },
	img: { type: String, required: true },

	basketShopId: { type: mongoose.Schema.Types.ObjectId, ref: 'basket' },
	shopTypeId: { type: mongoose.Schema.Types.ObjectId, ref: 'shopTypes' },
});

const ShopTypesSchema = new mongoose.Schema({
	name: { type: String, unique: true },
	shopItemId: [{ type: mongoose.Schema.Types.ObjectId, ref: 'shopItem' }],
});

export const User = mongoose.model('user', UserSchema);
export const Basket = mongoose.model('basket', BasketSchema);
export const BasketDecor = mongoose.model('basketDecor', BasketDecorSchema);
export const Decor = mongoose.model('decor', DecorSchema);
export const Type = mongoose.model('type', TypesSchema);
export const ShopTypes = mongoose.model('shopTypes', ShopTypesSchema);
export const ShopItem = mongoose.model('shopItem', ShopItemSchema);
// export const Style = mongoose.model('Style', StylesSchema);
