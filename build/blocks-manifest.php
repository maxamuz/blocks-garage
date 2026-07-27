<?php
// This file is generated. Do not modify it manually.
return array(
	'block-hero' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'blocks-garage/block-hero',
		'version' => '0.1.0',
		'title' => 'Block Hero',
		'category' => 'widgets',
		'icon' => 'car',
		'description' => 'Hero-блок с акционным предложением автосервиса.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'attributes' => array(
			'eyebrow' => array(
				'type' => 'string',
				'default' => 'Услуги автосервиса в САО Москвы'
			),
			'heading' => array(
				'type' => 'string',
				'default' => 'Диагностика автомобиля'
			),
			'headingAccent' => array(
				'type' => 'string',
				'default' => 'бесплатно'
			),
			'headingRest' => array(
				'type' => 'string',
				'default' => 'при ремонте в автосервисе'
			),
			'lead' => array(
				'type' => 'string',
				'default' => 'Диагностика дилерского уровня — точное определение неисправности и честный расчёт стоимости ремонта, без «развода» на лишние работы.'
			),
			'priceValue' => array(
				'type' => 'string',
				'default' => '0₽'
			),
			'priceSubtext' => array(
				'type' => 'string',
				'default' => 'при ремонте у нас'
			),
			'offerTitle' => array(
				'type' => 'string',
				'default' => 'Диагностика'
			),
			'offerText' => array(
				'type' => 'string',
				'default' => 'дилерского уровня — бесплатно, если выполняете ремонт у нас в автосервисе. Сначала честно скажем, что не так, и только потом чиним.'
			),
			'cta1Text' => array(
				'type' => 'string',
				'default' => 'Записаться на диагностику'
			),
			'cta1Href' => array(
				'type' => 'string',
				'default' => '#lead'
			),
			'cta2Text' => array(
				'type' => 'string',
				'default' => 'Смотреть цены'
			),
			'cta2Href' => array(
				'type' => 'string',
				'default' => '#price'
			),
			'note' => array(
				'type' => 'string',
				'default' => 'Принимаем автомобили любых марок, годов выпуска и с любым пробегом — состояние машины не влияет на качество диагностики.'
			),
			'imageSrc' => array(
				'type' => 'string',
				'default' => 'diag-hero.jpg'
			),
			'imageAlt' => array(
				'type' => 'string',
				'default' => 'Диагностика автомобиля в автосервисе Гараж САО'
			),
			'badgeMain' => array(
				'type' => 'string',
				'default' => 'Диагностика'
			),
			'badgeSub' => array(
				'type' => 'string',
				'default' => 'дилерского уровня'
			)
		),
		'textdomain' => 'blocks-garage',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js'
	)
);
