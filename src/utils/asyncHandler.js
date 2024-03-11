const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) => {
      next(error);
    });
  };
};

// using try catch
// const asyncHandler = (requestHandler) => {
// 	return async (req, req, next) => {
// 		try {
// 			await requestHandler(req, res, next);
// 		} catch (error) {
// 			res.status(error.code || 500).json({
// 				success: false,
// 				message: error.message,
// 			});
// 		}
// 	};
// };

export { asyncHandler };
