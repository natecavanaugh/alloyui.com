AUI().ready('aui-form-validator', function(A) {

  var rules = {
    picture: {
      acceptFiles: 'jpg, gif, png',
      required: true
    },
    age: {
      customRule: true,
      digits: true,
      range: [18, 50]
    },
    email: {
      email: true,
      required: true
    },
    emailConfirmation: {
      email: true,
      equalTo: '#email',
      required: true
    },
    gender: {
      required: true
    },
    lastName: {
      required: true,
      rangeLength: [2, 50]
    },
    name: {
      required: true,
      rangeLength: [2, 50]
    },
    'type[]': {
      required: true
    },
    url: {
      url: true
    }
  };

  var fieldStrings = {
    email: {
      required: 'Type your email in this field.'
    },
    gender: {
      required: 'The gender is required.'
    },
    'type[]': {
      required: 'Select the type is required.'
    },
    name: {
      required: 'Required field with a custom message.'
    }
  };

  new A.FormValidator({
    boundingBox: "#myForm",
    fieldContainer: 'p',
    rules: rules,
    fieldStrings: fieldStrings
  });

});