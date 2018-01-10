import { noPropagate, noImmediatePropagate, preventDefault } from "../utils";

describe("noPropagate", () => {
  test("it should call stopPropagation", () => {
    const mockEvent = {
      stopPropagation: jest.fn()
    };
    noPropagate(mockEvent);

    expect(mockEvent.stopPropagation.mock.calls.length).toBe(1);
  });
  test("it should return the event", () => {
    const mockEvent = {
      stopPropagation: jest.fn()
    };

    expect(noPropagate(mockEvent)).toBe(mockEvent);
  });
});

describe("noImmediatePropagate", () => {
  test("it should call stopImmediatePropagation on the nativeEvent", () => {
    const mockEvent = {
      nativeEvent: {
        stopImmediatePropagation: jest.fn()
      }
    };
    noImmediatePropagate(mockEvent);

    expect(mockEvent.nativeEvent.stopImmediatePropagation.mock.calls.length).toBe(1);
  });
  test("it should return the event", () => {
    const mockEvent = {
      nativeEvent: {
        stopImmediatePropagation: jest.fn()
      }
    };

    expect(noImmediatePropagate(mockEvent)).toBe(mockEvent);
  });
});

describe("preventDefault", () => {
  test("it should call preventDefault", () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };
    preventDefault(mockEvent);

    expect(mockEvent.preventDefault.mock.calls.length).toBe(1);
  });
  test("it should return the event", () => {
    const mockEvent = {
      preventDefault: jest.fn()
    };

    expect(preventDefault(mockEvent)).toBe(mockEvent);
  });
});
