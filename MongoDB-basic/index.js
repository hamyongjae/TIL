const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hello-mongo', {useNewUrlParser: true})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error(error.message));

const courseSchema = new mongoose.Schema({
    name : String,
    author: String,
    tags: [ String ],
    date : { type: Date, default: Date.now },
    isPublished:Boolean,
});

const Course = mongoose.model('Course',courseSchema);

/* CRUD Opertion  */
const course = new Course({
    name : '실전 Dapp 빌드',
    author : 'john',
    tags: ['Etherium', 'BlockChain', 'Dapp'],
    isPublished: true,
});
// Available schema : String, Number, Date, Buffer, Boolean, ObjectID, Array


course.save()
    .then(result=>console.log(result))
    .catch(error=>console.log(error.error.message));