export default () => {
    return `<!doctype html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <title>Sign up</title>
          <link rel="stylesheet" href="/public/style.css">
        </head>
        <body>
          <div id="root">Sign Up</div>
          <label>Name</label>
          <input id="name" type="text">
          <br>
          <label>Email</label>
          <input id="email" type="email">
          <br>
          <label>Password</label>
          <input id="password" type="password">
          <br>
          <button id="submit">Sign Up</button>
        </body>
        <script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
        <script>
          let user = {name: '', email: '', password: ''}
          $('#submit').click(function(){
            user.name = $('#name').val()
            user.email = $('#email').val()
            user.password = $('#password').val()
            $.ajax({
              method: "POST",
              url: '/api/users',
              data: user
            }).done(function(response){
              alert("New user created. Please sign in.")
            }).fail(function(response){
              alert("Something went wrong")
              console.log(response)
            })
          })
        </script>
      </html>`
}
