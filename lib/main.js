'use strict';

module.exports = function(){

  require('babel/register')( {
       //doesn't ignore pitayax modules
       ignore: /node_modules\/[^pitaya]/
   });

   return {
     Tabs: require('./components/Tabs'),
     TabList: require('./components/TabList'),
     Tab: require('./components/Tab'),
     TabPanel: require('./components/TabPanel'),
     Test: require('./components/Test')
   }
};
