<?php
/**
 * Provides global helper functions for routes
 */

function mixFile($file)
{

    // public path of app
    $path = public_path('mix-manifest.json');

    // get content of mix-manifest.json
    $manifest = file_get_contents($path);
    $manifest = str_replace("//", "/", $manifest);
    $manifest = json_decode($manifest, true);

    // add slash if not existing
    $file = substr($file, 0, 1) === "/" ? $file : '/' . $file;

    // return file from manifest or fallback
    if (!isset($manifest[$file])) {
        return $file;
    }
    return new Illuminate\Support\HtmlString(app('config')->get('app.mix_url') . $manifest[$file]);
}

?>
