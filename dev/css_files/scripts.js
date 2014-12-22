$(function()
{
	var button = $("button.copy")[0]
	if(button)
	{
		var clip = new ZeroClipboard.Client()
		ZeroClipboard.setMoviePath('http://css3ps.com/app/3rd/ZeroClipboard.swf')
		clip.addEventListener("mouseDown", function()
		{
			clip.setText(code)
		})
		clip.addEventListener("onComplete", function()
		{
			button.className = "ok"
		})
		clip.addEventListener("mouseOut", function()
		{
			button.className = "copy"
		})
		button.innerHTML = clip.getHTML(38, 38)
	}
	var span = $("#timer")[0]
	if(span)
	{
		var timer = setInterval(function() { span.innerHTML = (parseInt(span.innerHTML) - 1) }, 1024)
		setTimeout(function() { clearInterval(timer); document.location.reload(true) }, parseInt(span.innerHTML) * 1000)
	}
	$("body > div#content + div a").click(function(){
		var anchor = $("body > div#content + div a.active")[0]
		if(anchor != this)
		{
			$(anchor).removeClass("active")
			$($(anchor).attr("href")).removeClass("active")
			$(this).addClass("active")
			$($(this).attr("href")).addClass("active")
		}
		return false
	})
})
