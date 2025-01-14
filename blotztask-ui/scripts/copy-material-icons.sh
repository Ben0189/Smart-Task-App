
# if [[ -z "${CI}" ]]; then
#   echo "Symlinking the material icons & symbols"
#   # Icons  
#   ln -sf ../node_modules/@material-design-icons/svg/. ../public/assets/material-icons
# else
  echo "Copying the material icons & symbols"
  
  # Icons
  cp -a ../node_modules/@material-design-icons/svg/. ../public/assets/material-icons
fi