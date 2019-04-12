let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try{
    importAll(require.context('../iconfonts/',true,/\.svg$/))
}catch(error){
    
}