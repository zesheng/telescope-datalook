# DataLook.io
This package is intended to be added to [Telescope][1] to create the styling and functionality seen on [datalook.io][2].  

---

## About
This package/site is currently under heavy development.  If you're reading this, it's likely because you're one of the fine people working on it.  So I'll get right to it.

### Telescope Core
The clone of Telescope [in my Guthub account][3] will be kept up to date with [the official upstream version][4] published by [Sacha Greif][5].  The master branch in my Telescope repo will always be equal to the master branch on the upstream repo.  The [datalook branch][6] is the production branch for dataforgood.io and data-for-good-dev is the staging/testing branch (this branch doesn't currently exist - coming soon).

---

## Developer Setup

First, you will need to fork our Telescope repo to your own Github account.  Go to [the repo][3] and click "fork" in the top right corner.  You should now have a copy in your account.  Next you will need to clone that fork of Telescope to your local machine for development.  

```sh
# Clone the repo
git clone git@github.com:YOUR_NAME/Telescope.git

# Checkout the data-for-good branch
cd telescope
git checkout -b data-for-good
```

Now you're ready to get this theme package installed.  The steps are similar to what you just did.  However, you will not want to clone this package inside of Telescope.  It should be a separate repo on your local machine.  First, `cd` into whatever directory you would like to store this package in for development.  Then fork this repo to your own Github account and clone it to your local machine the same way you did with Telescope.

```sh
# Clone the D4G package repo
git clone git@github.com:YOUR_NAME/telescope-d4g.git
```

You will be using Meteorite to add the local telescope-d4g package to Telescope, so you will need to go back to the Telescope directory and add a smart.json file to the root with the following contents:

```json
{
    "packages": {
        "telescope-d4g": {
            "path": "/local/path/to/telescope-d4g"
        }
    }
}
```

and then from the Telescope directory run:

```sh
# Symlink the D4G package to the /packages folder 
mrt add telescope-d4g

# Add package to Telescope
meteor add telescope-d4g
```

If you have already checked out the data-for-good branch of Telescope, the default theme packages should already be disabled.  If they aren't, you need to disable them with:

```sh
meteor remove telescope-theme-base
meteor remove telescope-theme-hubble
```

Now just fire up Meteor and go to `http://localhost:3000` to test it out.  Telescope should look like the productions site here: http://dataforgood.io

---

### Development 
You will need to satisfy a few dependencies on your machine before you can get started with any styling development.  This package uses Sass and a few mixin libraries ([Compass][7], [Susy][8], and [Breakpoint][9]).

To install dependencies:
```sh
gem install compass compass-notify susy breakpoint
```

To get started writing Sass, (assuming Meteor is already running) just open another terminal window, `cd` into the `scss` folder of this package, and start Compass.

```sh
# Assuming you're already in the Telescope directory
cd packages/telescope-d4g/lib/client/scss

compass watch
```

If you experience issues with Compass not seeing scss files changing when you save them, you can alternatively run:

```sh
compass watch --poll
```

You should now be able to edit scss files and Compass will compile them to `packages/telescope-d4g/lib/client/css/screen.css` on each file save.  Meteor will detect that file change and refresh the styles in the page (without a full page refresh).

---

## More to come
This should be enough to get started with custom styling.  As soon as I finish building the rest of the custom templates, logic, etc. I will write more documentation about them.  Until then, the [docs on the Telescope website][10] are a great resource for those types of customizations.


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