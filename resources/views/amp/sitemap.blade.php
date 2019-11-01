@php
echo '<'.'?'.'xml version="1.0" encoding="UTF-8"?>'."\n";
@endphp
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<url>
<loc>https://amp.hasilpaudyal.com.np</loc>
<lastmod>2019-06-07T19:27:00+05:45</lastmod>
</url>
<url>
<loc>https://amp.hasilpaudyal.com.np/quotes</loc>
<lastmod>2019-10-25T19:27:00+05:45</lastmod>
</url>
<url>
<loc>https://amp.hasilpaudyal.com.np/poems</loc>
<lastmod>2019-10-25T19:27:00+05:45</lastmod>
</url>
@foreach($poems as $poem)
@php($poem = json_decode($poem->data))
<url>
<loc>https://amp.hasilpaudyal.com.np/poem/{{$poem->id}}/{{$poem->urlSlug}}</loc>
<lastmod>{{\Carbon\Carbon::parse(now())->setTimezone('Asia/Kathmandu')->toDateString()}}T{{\Carbon\Carbon::parse(now())->setTimezone('Asia/Kathmandu')->toTimeString()}}+05:45</lastmod>
</url>
@endforeach
@foreach($quotes as $quote)
@php($quote = json_decode($quote->data))
<url>
<loc>https://amp.hasilpaudyal.com.np/quote/{{$quote->id}}/{{$quote->urlSlug}}</loc>
<lastmod>{{\Carbon\Carbon::parse(now())->setTimezone('Asia/Kathmandu')->toDateString()}}T{{\Carbon\Carbon::parse(now())->setTimezone('Asia/Kathmandu')->toTimeString()}}+05:45</lastmod>
</url>
@endforeach
@foreach($projects as $project)
@php($project = json_decode($project->data))
<url>
<loc>https://amp.hasilpaudyal.com.np/project/{{$project->id}}/{{$project->urlSlug}}</loc>
<lastmod>{{\Carbon\Carbon::parse(now())->setTimezone('Asia/Kathmandu')->toDateString()}}T{{\Carbon\Carbon::parse(now())->setTimezone('Asia/Kathmandu')->toTimeString()}}+05:45</lastmod>
</url>
@endforeach
</urlset>