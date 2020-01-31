{{$question := (joinStr " " .CmdArgs)}}
{{$color := 16711680}}
{{$footerText := "Message ID:"}}
{{ $embed := cembed "title" $question "color" $color "footer" (sdict "text" $footerText)}}
{{$id := sendMessageRetID nil $embed }}
{{editMessage nil $id (cembed "title" $question "color" $color "footer" (sdict "text" (joinStr " " $footerText $id)))}}
