/*
Copyright (c) 2014, Groupon, Inc.
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

Redistributions of source code must retain the above copyright notice,
this list of conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright
notice, this list of conditions and the following disclaimer in the
documentation and/or other materials provided with the distribution.

Neither the name of GROUPON nor the names of its contributors may be
used to endorse or promote products derived from this software without
specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS
IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED
TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A
PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED
TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// Generated by CoffeeScript 2.0.0-beta7
void function () {
  var MemoryBackend;
  MemoryBackend = function () {
    var description;
    description = 'Stores everything just in memory';
    function MemoryBackend() {
      this.cache = {};
      this.type = 'memory';
    }
    MemoryBackend.prototype.get = function (key, callback) {
      if (this.isExpired(null != this.cache[key] ? this.cache[key].e : void 0))
        delete this.cache[key];
      if (null != callback)
        callback(null, null != (null != this.cache[key] ? this.cache[key].d : void 0) ? null != this.cache[key] ? this.cache[key].d : void 0 : null);
      return null;
    };
    MemoryBackend.prototype.expiresAt = function (seconds) {
      if (seconds === 0) {
        return 0;
      } else {
        return new Date().getTime() + parseInt(seconds) * 1e3;
      }
    };
    MemoryBackend.prototype.isExpired = function (expires) {
      if (!(null != expires))
        return false;
      if (expires === 0)
        return false;
      return new Date().getTime() > new Date(expires).getTime();
    };
    MemoryBackend.prototype.set = function (key, value, options, callback) {
      this.cache[key] = {
        d: value,
        e: this.expiresAt(options.expire)
      };
      if (null != callback)
        callback(null, value);
      return null;
    };
    MemoryBackend.prototype.unset = function (key, callback) {
      delete this.cache[key];
      if (null != callback)
        callback(null);
      return null;
    };
    return MemoryBackend;
  }();
  module.exports = MemoryBackend;
}.call(this);
