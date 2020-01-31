{{$id := (index .CmdArgs 0)}}
{{$answer := (joinStr " " (slice .CmdArgs 1))}}
{{$color := 16776960}}
{{$questionMsg := getMessage nil $id}}
{{$questionEmbed := (index $questionMsg.Embeds 0)}}
{{$question := $questionEmbed.Title}}
{{$footer := $questionEmbed.Footer}}
{{editMessage nil $id (cembed "title" $question "color" $color "description" $answer "footer" $footer)}}
