[![build status](https://secure.travis-ci.org/nujii/architect-request.png)](http://travis-ci.org/nujii/architect-request)
# architect-request

[request](https://github.com/mikeal/request) plugin for 
[architect](https://github.com/c9/architect)

## Config Format

```json
{
  "packagePath": "./node_modules/architect-request"
}
```

## Usage

Go to town on that sucker

```js
module.exports = function (options, imports, register) {

  var request = imports.request;

  request('http://google.com', function(error, response, body){
    // handle the response
  });

};
```

## TODO
It would be nice to create a fixure for request testing.

We would be able to define routes similar to express:

```js
var requestSpoof = new request.fixture();
requestSpoof.get('http://api.example.com', req, res) {
  res.send(JSON.stringify({hello: "world"}));
};
```

We can set up our tests like this:

```js
var imports = {
  request: requestSpoof
};

require('other-plugin')({}, imports, register);
```

And in a test case:

```js
it('should consume the api', function(done)) {
  // This module would make a call to 'http://api.example.com' and
  // parse the returned json
  moduleThatDependsOnRequest.get(function(err, obj){
    should.not.exist(err);
    should.exist(obj);
    should.exist(obj.hello);
    obj.hello.should.equal("world");
  });
}
```