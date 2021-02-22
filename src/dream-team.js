module.exports = function createDreamTeam(members) {
  let message = false;
    if (Array.isArray(members)) {
    let arr = members.reduce(function (names, item) {
      if (typeof(item) === 'string') {
        names.push(item.trim()[0].toUpperCase());
      }
return names
    }, []);

    if (arr !== []) {return arr.sort().join('');
    }
  }

  return message;
};
