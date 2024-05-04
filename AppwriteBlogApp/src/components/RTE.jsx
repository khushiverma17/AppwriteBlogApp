import React from "react";
import {Editor } from "@tinymce/tinymce-react"
import {Controller} from "react-hook-form"

//we can also do this useing forwardred for the RTE component

//this control comes from react-hook-form and it is responsible to transfer the states from here to the place where it is used
export default function RTE({name, control, label,
    defaultValue=""
}){
    return(
        <div className="w-full">
        {label && <label className="inline-block mb-1 pl-1">{label}</label>}
        <Controller
        name={name || "content"}
        control={control}
        render={({field : {onChange}})=>(
            <Editor
        initialValue="default value"
        init={
            {
            initialValue:{defaultValue},
            branding: false,
            height:500,
            menubar:true,
            plugins:[
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdateandtime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            'undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright  alignjustify bullist numlist outdent indent | removeformat | help',
            content_style: "body {font-family:Helvetica, Arial, sans-serif; font-size:14x}"
            }
        }
        onEditorChange={onChange}
        ></Editor>
        )}
        />
       
        
        </div>
    )
}
