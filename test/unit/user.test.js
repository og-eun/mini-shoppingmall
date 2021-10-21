const userController = require("../../src/controller/user");
const userModel = require("../../src/models/User");
const newUser = require("../data/new-user.json");
const httpMocks = require("node-mocks-http");

userModel.save = jest.fn();

beforeEach(() => {
  let req = httpMocks.createRequest();
  let res = httpMocks.createResponse();
});

describe("User Insert Test", () => {
  it("Should habe a insertUser function", () => {
    expect(typeof userController.insertUser).toBe("function");
  });

  it("Should call UserModel.save", () => {
    req.body = newUser;

    userController.insertUser(req, res);
    // expect(userModel.save).toBeCalled();
    expect(userModel.save).toBeCalledWith(newUser);
  });
});
