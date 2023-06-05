import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function localServer(props) {
   function save(){
      console.log(props.dataArr)

   }
  return (
   <div class="alert alert-warning alert-dismissible fade show" role="alert">
  Your note <strong>{{props.dataArr[0].title}}</strong> is saved
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>

  )
}
