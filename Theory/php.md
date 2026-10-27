# 1. PHP kya hai?

![PHP](https://images.openai.com/static-rsc-4/N21e_q_3CZ4zwAoLmvY-JUe0tanLvbMMTgZej2eQ4xcbF2NBhXNmqcIAnLu3vzBCqAdksGSa5mTvHHRn6AxnmH3HOThlAEnd3XTLkpPrPZvno2EHF51cc1GAH-UsZiKLijnvvvTtKRM_rn81EzwjcP1gTx1AzmOfTorgExF1Ksi6zPKiRb2S6p1h7a07vbLd?purpose=fullsize)


PHP ek server-side programming language hai. Iska istemal dynamic websites aur web applications banane ke liye hota hai.

Misaal ke taur par, jab aap kisi website par login karte ho, to website ko yeh check karna hota hai ke aapka username aur password sahi hain ya nahi. PHP server par yeh logic chala sakti hai aur database se information hasil kar sakti hai.
Ek simple example
Maan lo aap ek university student portal bana rahe ho.
- HTML: Login form banayega.
- CSS: Form ko design karegi.
- JavaScript: Button click aur browser mein interaction handle karegi.
- PHP: Server par login details verify kar sakti hai.
- Database: Students ke usernames aur doosra record store karega.

![Web Server](https://images.openai.com/static-rsc-4/wCQW5UbGKlaKONlXn07jG7jXr25b133PI9RwcgXAMuBpkEGXRKKE2rHBUxCK5kLpd0IGQUSlzPSNc-WtDm-0xe0LsvqtIQq5ReFKyTnUhD3laNLXc1vzf7fLAaAr4jkWhvydgzriYPA1Xw2bLSHSaHX3t_pP8cZYs0nYdQCEBqU?purpose=inline)

<b>Student ka browser

Username aur password submit karta hai

HTTP request / response

Web server + PHP

Login logic aur validation


Database

Student ka stored record check hota hai
</b>


Yeh ek simplified diagram hai. PHP MySQL ke ilawa doosre databases ke saath bhi kaam kar sakti hai.
PHP code ki chhoti si example



```php
<?php
$name = "Saad";
echo "Welcome, " . $name;
?>
```

Is code ka output hoga:
Welcome, Saad


Yahan echo text output karta hai aur $name ek variable hai. PHP ka code server par execute hota hai; aam tor par browser ko iska generated output milta hai, original server-side code nahi.



![Client Server Model in Web development](https://images.openai.com/static-rsc-4/Hyou_7zQL-9VVEgJFsyaYZhg2XQKZj1HBvmVwx1FGsy4KT64uP9auVnJHl3RGjMPnDv_Q--MoxePmWnQzU-UalZLmn7bkK5I5GJp7g6Yah30WwkY_pbMJ-c22ugBKtA14p7ZMnwn0vDDHGEntXFUOofMFa-P-PmmNvEKEt5XcfeI8B3pGwdtV22WVCt-JWST?purpose=fullsize)

Official learning resource: PHP Manual — Getting Started.<Br>
[PHP Official](https://www.php.net/manual/en/introduction.php)