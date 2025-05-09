async function storeName(names) {
    let results = [];
  
    for (let name of names) {
      try {
        let response = await fetch(`https://api.github.com/users/${name}`);
        if (response.status !== 200) {
          results.push(null);
        } else {
          let data = await response.json();
          results.push(data);
        }
      } catch (err) {
        results.push(null);
      }
    }
  
    return results;
  }
  