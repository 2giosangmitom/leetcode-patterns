{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
  };

  outputs = {
    self,
    nixpkgs,
  }: let
    system = "x86_64-linux";
    pkgs = import nixpkgs {inherit system;};
  in {
    devShells.${system}.default = pkgs.mkShellNoCC {
      packages = with pkgs; [
        nodejs_23
        gtest
        cmake
        clang
      ];
      CC = "${pkgs.clang}/bin/clang";
      CXX = "${pkgs.clang}/bin/clang++";
    };
    formatter.${system} = pkgs.alejandra;
  };
}
