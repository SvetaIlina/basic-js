const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if(!message || !key) {
      throw new Error ('Incorrect arguments!')
    }
    if(key.length < message.length) {
      key = key.repeat(Math.ceil(message.length/key.length)).slice(0, message.length)
      }

    key = key.toUpperCase()  
    message = message.toUpperCase();
    
    let crypted = '';
    let keyShift = 0
   
    for (let i =0; i < message.length; i++) {
        const charMes = message.charCodeAt(i);
        const charKey = key.charCodeAt(i-keyShift);
      if(charMes < 65 || charMes > 90) {
        crypted += message[i]
        keyShift +=1
        
      } else {
        crypted += String.fromCharCode((charMes+charKey)%26 +65)
        
      }
      
    }
    if(this.direct) {
      return crypted 
    } else {
      return crypted.split('').reverse().join('')
    }
    
  }
  decrypt(encryptedMessage , key) {
    if(!encryptedMessage || !key) {
      throw new Error ('Incorrect arguments!')
    }
    if(key.length < encryptedMessage.length) {
      key = key.repeat(Math.ceil(encryptedMessage.length/key.length)).slice(0, encryptedMessage.length)
        }

        key = key.toUpperCase()
        encryptedMessage = encryptedMessage.toUpperCase()

        let decrypted = '';
        let keyShift = 0

  for (let i =0; i < encryptedMessage.length; i++) {
      const charMes = encryptedMessage.charCodeAt(i);
      const charKey = key.charCodeAt(i-keyShift);
    if(charMes < 65 || charMes > 90) {
      decrypted += encryptedMessage[i];
      keyShift +=1
    } else {
      decrypted += String.fromCharCode((Math.abs(charMes-charKey + 26))%26 + 65)
    }

  }
  if(this.direct) {
    return decrypted 
  } else {
    return decrypted.split('').reverse().join('')
  }
    
  }

   
}


module.exports = {
  VigenereCipheringMachine
};
