const path=require('path')
const userHome=require('user-home')
const generate=require('../../lib/generate-project')
const tmpPath=path.join(userHome,'.top-templates','react-webpack-pc')
generate(tmpPath)