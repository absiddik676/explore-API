const shop = {
    name: 'alif laylla',
    isOpen: true,
    isNew: false,
    ravenew: 45000,
    product: ['mobile','laptop','pc']
}
const stringingFiled  = JSON.stringify(shop)
console.log(stringingFiled);
const parseJSON = JSON.parse(stringingFiled);
console.log(parseJSON);


const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
console.log(stuInfo.name);