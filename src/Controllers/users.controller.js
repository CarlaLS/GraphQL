

const passport= require('passport')
const User = require('../models/User')


const usersController = {};


usersController.renderSingUpForm = (req, res) => {
    res.render ('users/signup')


};

usersController.signup = async (req, res) => {
    const errors =[];
    const {name, address, age, phone, email, image, password, confirmPassword } = req.body;
 
 

    if(password != confirmPassword){
        errors.push ({text: 'Las contraseñas no coinciden'})
       
    }
    if(password.length < 4 ){
        errors.push({text:'La contraseña debe tener más de 4 caracteres'})
    }
    if(errors.length > 0) {
        res.render('/users/signup' ,{
            errors,
            name,
            address,
            age,
            phone,
            image,
            email,
            password,
            confirmPassword
        })
    } else {
        const emailUser= await User.findOne({email: email })
        if(emailUser) {
            req.flash('mensaje_error', 'El email ya está registrado');
            res.redirect('/users/signup');
        } else {
            const newUser =new User ({name, age, address, email, password});
            
            newUser.password = await newUser.encryptPassword(password)
            if (req.file && req.file.archivo ) {
                newUser.image = req.file.archivo
            }
            
            await newUser.save();
            req.flash('mensaje_satisfactorio', `Bienvenido/a ${name}`)
            res.redirect('/users/signin');
    }
    
};

}

usersController.singup = async (req, res) => {
    const users= await User.find();
    res.render('productos/profile', {users})
    
  };


usersController.renderSignInForm = (req, res) => {
    res.render ('users/signin')
};

usersController.signin = passport.authenticate('local', {
    failureRedirect:'/users/signin',
    successRedirect:'/productos',
    failureFlash: true
})


usersController.logout =async (req, res )=> {
    
   
    await req.logout((err) => {
       
        if (err) return next(err);
    req.flash("mensaje_satisfactorio", 'Hasta Luego');
    res.redirect("/users/signin");
    });
}


module.exports =usersController