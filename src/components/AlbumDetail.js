import React from 'react';
import {View,Text,Image,Linking} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const AlbumDetail = ({album})=>{

const{ title,artist,thumbnail_image,image,url}=album;
const {
headerContentStyle,headeTextStyle,artistTextStyle,
thumbnailStyle,thumnailContainerStyle,imageStyle
}=styles;

return(
<Card>


<CardSection>
         <View style={thumnailContainerStyle}>
         <Image style={thumbnailStyle} source={{uri:thumbnail_image}} />
         </View>
         <View style={headerContentStyle}>
                 <Text style={headeTextStyle}>{title}</Text>
                <Text style={artistTextStyle}>{artist}</Text>
         </View>
</CardSection>


<CardSection>
      <Image style={imageStyle} source={{uri:image}} />
</CardSection>


<CardSection>


      <Button  whenPress={() => Linking.openURL(url)} >
      Buy Now
      </Button>
</CardSection>

</Card>
);
};

const styles = {

  headerContentStyle:{

    flexDirection:'column',
    justifyContent:'space-around'
  },

headeTextStyle:{

     fontSize:18,
     marginLeft:10

},
artistTextStyle:{

  marginLeft:10
},

  thumbnailStyle:{
    height:50,
    width:50
  },

  thumbnainContainerStyle:{

   justifyContent:'center',
   alignItems:'center',
   marginLeft:10,
   marginRight:10
},
imageStyle:{

  height:300,
  flex:1,
  width:null
}



};



export default AlbumDetail;
