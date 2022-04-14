function encrypt(text, n) {
    if (!text) return text;
    let arr = text.toLowerCase().split("");
    const odd = arr.filter((el, index) => (index % 2 == 0 ? true : false));
    const even = arr.filter((el, index) => (index % 2 == 0 ? false : true));
    const result = even.concat(odd).join("");
    if (n > 1) return encrypt(result, n - 1);
    return result;
  }
  
  const enc = encrypt("1234567", 2);
  console.log("encrypt ->", enc);
  
  function decrypt(encrypted_text, n) {
    if (!encrypted_text) return encrypted_text;
    let arr2 = encrypted_text.toLowerCase();
    let main = arr2.substring(arr2.length / 2 || 0).split("");
    let toReplace = arr2.substring(0, arr2.length / 2 || 0).split("");
    const result = [];
    for (let i = 0; i < main.length; i++) {
      result.push(main[i]);
      result.push(toReplace[i]);
    }
    const joined = result.join("");
    if (n > 1) return decrypt(joined, n - 1);
    return joined;
  }
  
  console.log("decrypt -> " + decrypt(enc, 2));