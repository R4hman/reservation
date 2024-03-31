export const setCookie = (key, value) => {
  //   const date = new Date();
  //   date.setTime(date.getTime() + 5 * 2890 * 1000);
  //   const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${key}=${value}; max-age=3600; path=/`;
};

export const getCookie = (name) => {
  if (document.cookie) {
    const cDecoded = decodeURIComponent(document.cookie);

    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach((element) => {
      if (element.indexOf(name) == 0) {
        result = element.substring(name.length + 1);
      }
    });

    return result;
  }
};

export const deleteCookie = (names) => {
  names.forEach((name) => {
    setCookie(name, null);
  });
};

export function deleteCookies() {
  const allCookies = document.cookie.split(";");

  for (let i = 0; i < allCookies.length; i++)
    document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString();
}
