
const styles = {
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-16 py-10",
  
    heroHeadText:
      "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
    heroSubText:
      "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  
    sectionHeadText:
      "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
    sectionSubText:
      "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider font-bold",
    sectionParaText:
      "sm:text-[16px] text-[16px] text-secondary capitalize tracking-wider text-white",
  };
  
  export { styles };



  let x = 2;
let y = 3;
const z = 10;

{
 let x = 3e-3;
 let y = 100;
 let a = 0.001;
 const z = 1000;

}
console.log(x + y + z);


let msg1 = "hello";
let msg2 = msg1.slice(-1);
console.log(msg2 ? msg2 : msg2 + msg1);