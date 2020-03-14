module.exports = function toReadable (number) {
        let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        let mas = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
        let mas1 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        let hundred = ' hundred';
        let string = '';
        let numberString = number.toString();
        let initial_number = numberString;
        
           for (var i = 0; i < numberString.length; i++){
        
                if (initial_number.length == 3) {
        
                    if (i === 0) {
        
                        string += units[Math.floor(number / 100)]; 
                        initial_number = initial_number.slice(1);
                        string += hundred;
        
                    if (Math.floor(initial_number/10) == 0) {
        
                        initial_number = initial_number.slice(1);
                        if (initial_number == 0) {
        
                            initial_number = '';
                        }
                    };
                };
              }; 
              if (initial_number.length == 2) {
        
                if (initial_number < 20 && i === 0) {
        
                    if (numberString.length === 2) {
        
                        string += mas[number%10];
        
                    } else {
        
                        string += ' ' + mas[number % 10];
                    }
                    initial_number = initial_number.slice(2);
        
                } else {
        
                    if (numberString.length !== 2) {
                        string += ' ' + mas1[Math.floor(initial_number / 10) - 2];
                        
                    } else {
        
                        string += mas1[Math.floor(initial_number / 10) - 2];
        
                    }
        
                    initial_number = initial_number.slice(1);
                };
                    if (initial_number == 0) {
                        initial_number = '';
                    };
                };
                if (initial_number.length == 1) { 
        
                    if (numberString.length === 1) {
                        string += units[initial_number];
                        initial_number = '';
                    } else {
                        string += ' ' + units[initial_number];
                        initial_number = '';
                    }
                };
         };
          return string;
          
}
