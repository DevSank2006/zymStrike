const CalculateBmi=(height,weight,setBmi,setCategory)=>{
    
    const heightInMeter=height/100;
    let bmi=null;
    if(height==null || weight==null){
        setBmi("Fill complete data");
        setCategory("");
        return;
    }else{
       bmi =(weight/(heightInMeter*heightInMeter)).toFixed(2);
         setBmi(bmi);
         if(bmi<18){
        setCategory("underweight")
    }  else if (bmi < 25) {
    setCategory("Normal weight");
  }
  else if (bmi < 30) {
    setCategory("Overweight");
  }
  else if (bmi < 35) {
    setCategory("Obesity Class 1");
  }
  else if (bmi < 40) {
    setCategory("Obesity Class 2");
  }
  else {
    setCategory("Extreme Obesity");
  }
    }
    

}
export default CalculateBmi;