import Emoji from './emoji.json';

export const getEmoji = (page) =>{
	try {
		 let result = chooseRandom(Emoji,Emoji.length);
       const limit = 150;
       const startIndex = (page - 1) * limit;
       const endIndex = page * limit;
       const output = result.splice(startIndex,endIndex);
       return output;
	} catch(err) {
		console.log(err);
	}
}

export const emojiSearch = (text) =>{
   try {
      return Emoji.filter(emoji=>{
         if(emoji.name.toLowerCase().includes(text.toLowerCase())){
            return true;
         }
         if(emoji.category.toLowerCase().includes(text.toLowerCase())){
            return true;
         }
         return false;
      })
   } catch(err) {
      console.log(err);
   }
}

const chooseRandom = (arr, num = 1) => {
   const res = [];
   for(let i = 0; i < num; ){
      const random = Math.floor(Math.random() * arr.length);
      if(res.indexOf(arr[random]) !== -1){
         continue;
      };
      res.push(arr[random]);
      i++;
   };
   return res;
};