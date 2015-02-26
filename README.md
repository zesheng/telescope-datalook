# DataLook.io

### The Latest and Best of Civic Hacking, Open Data, and Data Science for Social Good

This package can be added to [Telescope][1] to create the styling and functionality seen on [datalook.io][2].  

---

## About

### Telescope Core
The clone of Telescope [in my Github account][3] is kept in sync with [the official upstream repo][4] published by [Sacha Greif][5].  The master branch in my Telescope fork will always be equal to the master branch in the upstream repo.  The [datalook branch][6] is the production branch for datalook.io and datalook-dev is the staging/testing branch.  

---

## Developer Setup

First, you will need to fork [my Telescope fork][3].  Then you need to clone that fork to your local machine for development.  

```sh
# Clone the repo
git clone git@github.com:YOUR_NAME/Telescope.git

# Checkout the datalook branch
cd Telescope
git checkout -b datalook
```

Now you're ready to get the telescope-datalook package installed.  The steps are similar to what you just did.  However, you want to clone this package into it's own location outside of Telescope and symlink it with Meteorite. Just `cd` into whatever directory you would like to store this package in for development.  Then fork this repo to your own account and clone it to your local machine.

```sh
# Clone the telescope-datalook package repo
git clone git@github.com:YOUR_NAME/telescope-datalook.git
```

You will be using Meteorite to add the local telescope-datalook package to Telescope, so you will need to go to the Telescope directory and add a smart.json file to the root with the following contents:

```json
{
  "packages": {
    "telescope-datalook": {
      "path": "/local/path/to/telescope-datalook"
    }
  }
}
```

and then from the root of Telescope run:

```sh
# Symlink the telescope-datalook package to the /packages folder 
mrt add telescope-datalook
```

If you have already checked out the `datalook` branch of my fork of Telescope, the default theme packages that come with Telescope should already be disabled and additional custom packages should already be added.  See `.meteor/packages` in the `datalook` branch for more details.

Now just fire up Meteor and go to `http://localhost:3000` to test it out.  Telescope should now look like the production site here: http://datalook.io

---

### Development 
You will need to satisfy a few dependencies on your machine before you can get started with any styling development.  This package uses Sass and a few mixin libraries ([Compass][7], [Susy][8], and [Breakpoint][9]).

To install dependencies:
```sh
gem install compass compass-notify susy breakpoint autoprefixer-rails
```

To get started writing Sass, (assuming Meteor is already running) just open another terminal window, `cd` into the `scss` folder of this package, and start Compass.  Compass and Autoprefixer are configured in the config.rb [here][11].

```sh
# Assuming you're already in the Telescope directory
cd packages/telescope-datalook/lib/client/scss

compass watch
```

You should now be able to edit scss files and Compass will compile them to `packages/telescope-datalook/lib/client/css/screen.css` on each file save.  

---

## Future
The [official docs on the Telescope website][10] are a great resource for all types of customization. It is definitely the recommended place to go first.  If you can't fine what you're looking for there, head over to http://meta.telesc.pe and ask for help.  There's always someone there can point you in the right direction.


[1]: http://telesc.pe
[2]: http://datalook.io
[3]: https://github.com/jshimko/Telescope
[4]: https://github.com/TelescopeJS/Telescope
[5]: https://github.com/SachaG
[6]: https://github.com/jshimko/Telescope/tree/datalook
[7]: http://compass-style.org/
[8]: http://susy.oddbird.net/
[9]: http://breakpoint-sass.com/
[10]: http://www.telesc.pe/docs/
[11]: https://github.com/jshimko/telescope-datalook/blob/master/lib/client/scss/config.rb