// module.exports = {
//   1: 1,
// };

const getCatName = function (callback, id) {

  console.log(id, 'somewhere this is Nan')

  if (isNaN(id)) {
    console.log('nothing here yet');
    callback([{ name: 'null' }]);
  } else {


    connection.query(`SELECT name FROM categories WHERE id=${id}`, function (error, results, fields) {
      if (error) {
        console.log(error);
      } else {
        callback(results);
      }
    });
  }



};



module.exports = {
  getAllTransactions,
  writeCategory,
  readCategory,
  updateCategory,
  getCatName
};


