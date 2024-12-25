class Helper {
  static Locals = [
    {
      Label: "English",
      Value: "en",
    },
    {
      Label: "العربية",
      Value: "ar",
    },
  ];
  static GetStorage(key) {
    try {
      const ls = JSON.parse(localStorage.getItem("browserData")) || {};
      return ls[key];
    } catch {
      return null;
    }
  }
  static SetStorage(key, value) {
    try {
      const ls = JSON.parse(localStorage.getItem("browserData")) || {};
      localStorage.setItem(
        "browserData",
        JSON.stringify({
          ...ls,
          [key]: value,
        })
      );
    } catch {
      return null;
    }
  }
  static RemoveStorage(key) {
    try {
      const ls = JSON.parse(localStorage.getItem("browserData")) || {};
      delete ls[key];
      localStorage.setItem("browserData", JSON.stringify(ls));
    } catch {
      return null;
    }
  }
  static ClearStorage() {
    Helper.RemoveStorage("User");
  }
}

export default Helper;
