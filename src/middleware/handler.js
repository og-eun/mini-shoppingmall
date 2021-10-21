/**
 * API 요청 중 발생하는 에러를 Transaction 없이, 안전하게 처리하는 handler
 */
exports.wrapHandler = (requestHandler) => async (req, res, next) => {
  try {
    await requestHandler(req, res, next);
  } catch (error) {
    console.warn(error);
    next(error);
  }
};
