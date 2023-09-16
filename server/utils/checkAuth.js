import jwt from 'jsonwebtoken';

const CheckAuth = (req, res, next) => {
	if (req.method === 'OPTIONS') {
		next();
	}

	try {
		const token = (req.headers.authorization || '').replace(
			/Bearer\s?/,
			''
		);

		if (!token) {
			return res.status(401).json({ message: 'No access.' });
		}

		const decodec = jwt.verify(token, process.env.JWT_SECRET);

		req.user = decodec;
		req.userId = decodec.id;
		next();
	} catch (e) {
		return res.status(401).json({
			message: 'No access server error.',
		});
	}
};

export default CheckAuth;
