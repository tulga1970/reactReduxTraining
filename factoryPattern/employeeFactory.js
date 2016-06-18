var Developer = function(){
    // constructor of developer class
};

var ProjectManager = function(){
    // constructor of ProjectManager class
};

var Employee = function(){
    // constructor of Employee class
};

var factory = function(type){
    var constructors = {
        developer: function(){
            return new Developer();
        },
        projectManager: function(){
            return new ProjectManager();
        },
        default: function(){
            return new Employee();
        }
    }
    
    try{
        var instance = constructors[type]();
    }catch(e){
        throw "'" + type + "' is not supported type";
    }
    
    return instance;
}

module.exports = factory;