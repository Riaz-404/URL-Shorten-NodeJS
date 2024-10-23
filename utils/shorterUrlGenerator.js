function shorterUrlGenerator() {
  const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  let uniqueShorterUrl = '';

  for(let i=0; i<8;i++){
    const temp = Math.floor(Math.random() * str.length);
    uniqueShorterUrl += str[temp];
  }

  return uniqueShorterUrl;
}

module.exports = shorterUrlGenerator;
