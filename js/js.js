window.addEventListener('load',(e)=>{
   
    



    document.getElementById('buttonSend').addEventListener('click',(e)=>{
        var userName = document.getElementById('username').value;
        var userEmail = document.getElementById('useremail').value;
        var text = document.getElementById('msg').value
       
        
        document.getElementById('username').style.border = '1px solid black'
        document.getElementById('useremail').style.border = '1px solid black'
        document.getElementById('msg').style.border = '1px solid black'
        document.getElementById('res').innerText = "";
        if(userEmail == "" || userName == "" ){
            document.getElementById('username').style.border = '1px solid red'
            document.getElementById('useremail').style.border = '1px solid red'
            document.getElementById('res').innerText = 'יש להזין כתובת אימייל חוקית ושם';
            document.getElementById('res').style.color = 'red'

           
            
        }
        else if(text == ""){
            document.getElementById('res').innerText = 'יש להזין הודעה לנמען';
            document.getElementById('res').style.color = 'red';
            document.getElementById('msg').style.border = '1px solid red'
        }
        else{
            console.log(userEmail, userName, text);
            var num = '972549326864'
            
  var win = window.open(`https://wa.me/972534273529?text=שלום%27לך%סוסו%20קוראים%20לי%20${userName}%20%20${text}`, '_blank')
         
       win()
}
      
    })




    // const shareData = {
    //     title: 'כרטיס ביקור',
    //     text: 'קולין מונייר מעצבת אופנה',
    //     url: 'http://127.0.0.1:5500/index.html'
    //   }
      
    //   const btn = document.getElementById('buttonshare');
    
      
    //   // Share must be triggered by "user activation"
    //   btn.addEventListener('click', async () => {
    //     try {
    //       await navigator.share(shareData);
    //       console.log('yes')
    //     } catch (err) {
    //         console.log(err)
    //     }
    //   });



})