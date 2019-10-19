@php
echo '<'.'?'.'xml version="1.0" encoding="UTF-8"?>'."\n";
@endphp
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://amp.hasilpaudyal.com.np</loc>
<lastmod>2019-06-07T19:27:00+05:45</lastmod>
</url>
@foreach($poems as $poem)
@php($poem = json_decode($poem->data))
<url>
<loc>https://amp.hasilpaudyal.com.np/{{$poem->id}}/{{$poem->urlSlug}}</loc>
<lastmod>{{\Carbon\Carbon::parse(now())->setTimezone('Asia/Kathmandu')->toDateString()}}T{{\Carbon\Carbon::parse(now())->setTimezone('Asia/Kathmandu')->toTimeString()}}+05:45</lastmod>
</url>
@endforeach
</urlset>