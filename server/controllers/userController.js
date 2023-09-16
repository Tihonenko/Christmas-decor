import jwt from 'jsonwebtoken';
import { User, Basket } from '../models/Models.js';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';

const SALT_ROUND = process.env.SALT_ROUND;

const generateJwt = (id, email, role) => {
	return jwt.sign({ id, email, role }, process.env.JWT_SECRET, {
		expiresIn: '1d',
	});
};

class userController {
	// Register User
	async register(req, res) {
		try {
			const errors = validationResult(req);
			if (!errors.isEmpty()) {
				return res.json(errors.array());
			}

			const { email, password, role } = req.body;

			if (!email || !password) {
				return res.status(401).json({
					message: 'Invalid username or password.',
				});
			}

			const isUser = await User.findOne({ email });
			if (isUser) {
				return res.status(401).json({
					message: 'Email already exists.',
				});
			}

			const passwordHash = await bcrypt.hashSync(password, SALT_ROUND);

			// const docUser = new User({
			//     email,
			//     password: passwordHash,
			//     basket: basket._id,
			// });
			// const basket = new Basket({userId: docUser._id, email: docUser.email})

			// await docUser.save();
			// await basket.save();
			const user = await User.create({
				email,
				password: passwordHash,
				role,
			});
			const basket = await Basket.create({ userId: user._id });

			await User.findByIdAndUpdate(user._id, {
				$push: { basket: basket._id },
			});
			const token = generateJwt(user._id, user.email, user.role);

			return res.status(200).json({
				token,
				message: 'Registration completed successfully.',
			});
		} catch (e) {
			res.status(500).json({ message: 'Error during registration.' });
		}
	}

	// Login User
	async login(req, res) {
		try {
			const { email, password } = req.body;
			const user = await User.findOne({ email });

			if (!user) {
				return res.status(401).json({
					message: 'Invalid username or password.',
				});
			}

			const isPasswordCorrect = await bcrypt.compareSync(
				password,
				user.password
			);

			if (!isPasswordCorrect) {
				return res.status(401).json({
					message: 'Invalid username or password.',
				});
			}

			const token = generateJwt(user._id, user.email, user.role);
			return res.status(200).json({
				user,
				token,
				message: 'Welcome',
			});
		} catch (e) {
			res(500).json({ message: 'Authorisation Error.' });
		}
	}

	// Get me User
	async auth(req, res) {
		try {
			const user = await User.findById(req.userId);

			return res.status(200).json({ user, message: 'Hello' });
		} catch (e) {
			res.status(500).json({
				message: 'Authorisation Error.',
			});
			console.log(e);
		}
	}
}
export default new userController();
