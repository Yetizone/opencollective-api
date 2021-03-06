import { expect } from 'chai';

import { generateKey, secretbox } from '../../../server/lib/encryption';

describe('server/lib/encryption', () => {
  describe('secretbox', () => {
    it('it encrypts and decrypts ok', () => {
      const message = 'OpenCollective Rules';
      const buff = Buffer.from(message);
      const key = generateKey();

      const encrypted = secretbox.encrypt(buff, key);

      expect(Buffer.isBuffer(encrypted)).to.be.true;

      expect(encrypted).to.not.eq(message);

      const result = secretbox.decrypt(encrypted, key);

      expect(result).to.eq(message);
    });
  });
});
