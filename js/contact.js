function emailSend()
{
    var userfName = document.getElementById('fname').value;
    var userlName = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var Msg = document.getElementById('msg').value;

    var messageeBody=       "Name    : " + userfName+userlName+
                      "<br/> Email   : " + email +
                      "<br/> Phone   : " + phone +
                      "<br/> Msg    : " + Msg ;



    Email.send({
                  Host : "smtp.elasticemail.com",
                  Username : "webwork.dg@gmail.com",
                  Password : "53D9AF28276ADC1D9F0D4F11155B4E3D787C",
                  To : 'webwork.dg@gmail.com',
                  From : "webwork.dg@gmail.com",
                  Subject : "Mail From Portfolio",
                  Body : messageeBody
                }).then(
      message => {
        
                    swal("Successful", "You'll Receive an call or mail", "success");             
                }
    );
}