{ pkgs ? import <nixpkgs> {} # here we import the nixpkgs package set
}:
# mkShell is a helper function
pkgs.mkShell {
  # that requires a name
  name="dev-environment";
  # and a list of packages
  buildInputs = [
    pkgs.nodejs
  ];

  # bash to run when you enter the shell
  shellHook = ''
    alias preview="cd app && npm run build && npm run preview -- --host"
    alias dev="cd app && npm run dev -- --host"
    alias quit="kill 1"
    alias push=""
    echo "Start developing..."
  '';                                                                   
}