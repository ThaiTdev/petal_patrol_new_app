import React, { useState } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";

import { COLORS } from "../../../constants/themes";

const CGUComponent = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>CONDITIONS GÉNÉRALES D'UTILISATION</Text>
      <Text style={styles.title}>En vigueur au 01/02/2024</Text>
      <Text style={styles.paragraph}>
        Les présentes conditions générales d'utilisation (dites « CGU ») ont
        pour objet l'encadrement juridique des modalités de mise à disposition
        du site et des services par Arosa'Je et de définir les conditions
        d’accès et d’utilisation des services par « l'Utilisateur ».
      </Text>
      <Text style={styles.paragraph}>
        Les présentes CGU sont accessibles sur le site à la rubrique «CGU».
      </Text>
      <Text style={styles.paragraph}>
        Toute inscription ou utilisation du site implique l'acceptation sans
        aucune réserve ni restriction des présentes CGU par l’utilisateur. Lors
        de l'inscription sur le site via le Formulaire d’inscription, chaque
        utilisateur accepte expressément les présentes CGU en cochant la case
        précédant le texte suivant : « Je reconnais avoir lu et compris les CGU
        et je les accepte ».
      </Text>
      <Text style={styles.paragraph}>
        En cas de non-acceptation des CGU stipulées dans le présent contrat,
        l'Utilisateur se doit de renoncer à l'accès des services proposés par le
        site. Petal Patrol se réserve le droit de modifier unilatéralement et à
        tout moment le contenu des présentes CGU.
      </Text>
      <Text style={styles.heading}>ARTICLE 1 : LES MENTIONS LÉGALES</Text>
      <Text>
        L'édition du site Petal Patrol est assurée par la Société SARL Arosa'Je
        au capital de 15000 euros, immatriculée au RCS de Montpellier sous le
        numéro _______________, dont le siège social est situé au
        _______________ Numéro de téléphone 06 00 00 00 00 Adresse e-mail :
        arosaje@plant.vg. Le Directeur de la publication est : ____________
        L'hébergeur du site Petal Patrol est la société Arosa'Je, dont le siège
        social est situé au _______________, avec le numéro de téléphone : 06 00
        00 00 00.
      </Text>
      <Text style={styles.heading}>ARTICLE 2 : ACCÈS AU SITE</Text>
      <Text>
        L'application Petal Patrol permet à l'Utilisateur un accès gratuit aux
        services suivants : Conseils d'Entretien Personnalisés, Partage de
        Photos et de Conseils, Système de Notation et d'Avis, Messagerie
        Intégrée, Profil Utilisateur Personnalisé, Recherche de Gardiens de
        Plantes, Notifications Personnalisées L'application est accessible
        gratuitement en tout lieu à tout Utilisateur ayant un accès à Internet.
        Tous les frais supportés par l'Utilisateur pour accéder au service
        (matériel informatique, logiciels, connexion Internet, etc.) sont à sa
        charge. L’Utilisateur non membre n'a pas accès aux services réservés.
        Pour cela, il doit s’inscrire en remplissant le formulaire. En acceptant
        de s’inscrire aux services réservés, l’Utilisateur membre s’engage à
        fournir des informations sincères et exactes concernant son état civil
        et ses coordonnées, notamment son adresse email. Pour accéder aux
        services, l’Utilisateur doit ensuite s'identifier à l'aide de son
        identifiant et de son mot de passe qui lui seront communiqués après son
        inscription. Tout Utilisateur membre régulièrement inscrit pourra
        également solliciter sa désinscription en se rendant à la page dédiée
        sur son espace personnel. Celle-ci sera effective dans un délai
        raisonnable. Tout événement dû à un cas de force majeure ayant pour
        conséquence un dysfonctionnement du site ou serveur et sous réserve de
        toute interruption ou modification en cas de maintenance, n'engage pas
        la responsabilité de Petal Patrol. Dans ces cas, l’Utilisateur accepte
        ainsi ne pas tenir rigueur à l’éditeur de toute interruption ou
        suspension de service, même sans préavis. L'Utilisateur a la possibilité
        de contacter le site par messagerie électronique à l’adresse email de
        l’éditeur communiqué à l’ARTICLE 1.
      </Text>
      <Text style={styles.heading}>ARTICLE 3 : COLLECTE DES DONNÉES</Text>
      <Text>
        Le site assure à l'Utilisateur une collecte et un traitement
        d'informations personnelles dans le respect de la vie privée
        conformément à la loi n°78-17 du 6 janvier 1978 relative à
        l'informatique, aux fichiers et aux libertés. En vertu de la loi
        Informatique et Libertés, en date du 6 janvier 1978, l'Utilisateur
        dispose d'un droit d'accès, de rectification, de suppression et
        d'opposition de ses données personnelles. L'Utilisateur exerce ce droit
        : - par mail à l'adresse email arosaje@plant.vg - par voie postale au
        arosaje@plant.vg ; - via un formulaire de contact ; - via son espace
        personnel ;
      </Text>

      <Text style={styles.heading}>ARTICLE 4 : PROPRIÉTÉ INTELLECTUELLE</Text>
      <Text>
        Les marques, logos, signes ainsi que tous les contenus du site (textes,
        images, son…) font l'objet d'une protection par le Code de la propriété
        intellectuelle et plus particulièrement par le droit d'auteur.
        L'Utilisateur doit solliciter l'autorisation préalable du site pour
        toute reproduction, publication, copie des différents contenus. Il
        s'engage à une utilisation des contenus du site dans un cadre
        strictement privé, toute utilisation à des fins commerciales et
        publicitaires est strictement interdite. Toute représentation totale ou
        partielle de ce site par quelque procédé que ce soit, sans
        l’autorisation expresse de l’exploitant du site Internet constituerait
        une contrefaçon sanctionnée par l’article L 335-2 et suivants du Code de
        la propriété intellectuelle. Il est rappelé conformément à l’article
        L122-5 du Code de propriété intellectuelle que l’Utilisateur qui
        reproduit, copie ou publie le contenu protégé doit citer l’auteur et sa
        source.
      </Text>
      <Text style={styles.heading}>ARTICLE 5 : RESPONSABILITÉ</Text>
      <Text>
        Les sources des informations diffusées sur le site Petal Patrol sont
        réputées fiables mais le site ne garantit pas qu’il soit exempt de
        défauts, d’erreurs ou d’omissions. Les informations communiquées sont
        présentées à titre indicatif et général sans valeur contractuelle.
        Malgré des mises à jour régulières, le site Petal Patrol ne peut être
        tenu responsable de la modification des dispositions administratives et
        juridiques survenant après la publication. De même, le site ne peut être
        tenue responsable de l’utilisation et de l’interprétation de
        l’information contenue dans ce site. L'Utilisateur s'assure de garder
        son mot de passe secret. Toute divulgation du mot de passe, quelle que
        soit sa forme, est interdite. Il assume les risques liés à l'utilisation
        de son identifiant et mot de passe. Le site décline toute
        responsabilité. Le site Petal Patrol ne peut être tenu pour responsable
        d’éventuels virus qui pourraient infecter l’ordinateur ou tout matériel
        informatique de l’Internaute, suite à une utilisation, à l’accès, ou au
        téléchargement provenant de ce site. La responsabilité du site ne peut
        être engagée en cas de force majeure ou du fait imprévisible et
        insurmontable d'un tiers.
      </Text>

      <Text style={styles.heading}>ARTICLE 6 : LIENS HYPERTEXTES</Text>
      <Text>
        Des liens hypertextes peuvent être présents sur le site. L’Utilisateur
        est informé qu’en cliquant sur ces liens, il sortira du site Petal
        Patrol. Ce dernier n’a pas de contrôle sur les pages web sur lesquelles
        aboutissent ces liens et ne saurait, en aucun cas, être responsable de
        leur contenu.
      </Text>

      <Text style={styles.heading}>ARTICLE 7 : COOKIES</Text>
      <Text>
        L’Utilisateur est informé que lors de ses visites sur le site, un cookie
        peut s’installer automatiquement sur son logiciel de navigation. Les
        cookies sont de petits fichiers stockés temporairement sur le disque dur
        de l’ordinateur de l’Utilisateur par votre navigateur et qui sont
        nécessaires à l’utilisation du site Petal Patrol. Les cookies ne
        contiennent pas d’information personnelle et ne peuvent pas être
        utilisés pour identifier quelqu’un. Un cookie contient un identifiant
        unique, généré aléatoirement et donc anonyme. Certains cookies expirent
        à la fin de la visite de l’Utilisateur, d’autres restent. L’information
        contenue dans les cookies est utilisée pour améliorer le site Petal
        Patrol. En naviguant sur le site, L’Utilisateur les accepte.
        L’Utilisateur doit toutefois donner son consentement quant à
        l’utilisation de certains cookies. A défaut d’acceptation, l’Utilisateur
        est informé que certaines fonctionnalités ou pages risquent de lui être
        refusées. L’Utilisateur pourra désactiver ces cookies par
        l’intermédiaire des paramètres figurant au sein de son logiciel de
        navigation.
      </Text>
      <Text style={styles.heading}>
        ARTICLE 8 : PUBLICATION PAR L’UTILISATEUR
      </Text>
      <Text>
        Le site permet aux membres de publier les contenus suivants : Photos,
        Demande de gardiennage. Dans ses publications, le membre s’engage à
        respecter les règles de la Netiquette (règles de bonne conduite de
        l’internet) et les règles de droit en vigueur. Le site peut exercer une
        modération sur les publications et se réserve le droit de refuser leur
        mise en ligne, sans avoir à s’en justifier auprès du membre. Le membre
        reste titulaire de l’intégralité de ses droits de propriété
        intellectuelle. Mais en publiant une publication sur le site, il cède à
        la société éditrice le droit non exclusif et gratuit de représenter,
        reproduire, adapter, modifier, diffuser et distribuer sa publication,
        directement ou par un tiers autorisé, dans le monde entier, sur tout
        support (numérique ou physique), pour la durée de la propriété
        intellectuelle. Le Membre cède notamment le droit d'utiliser sa
        publication sur internet et sur les réseaux de téléphonie mobile. La
        société éditrice s'engage à faire figurer le nom du membre à proximité
        de chaque utilisation de sa publication. Tout contenu mis en ligne par
        l'Utilisateur est de sa seule responsabilité. L'Utilisateur s'engage à
        ne pas mettre en ligne de contenus pouvant porter atteinte aux intérêts
        de tierces personnes. Tout recours en justice engagé par un tiers lésé
        contre le site sera pris en charge par l'Utilisateur. Le contenu de
        l'Utilisateur peut être à tout moment et pour n'importe quelle raison
        supprimé ou modifié par le site, sans préavis.
      </Text>

      <Text style={styles.heading}>
        ARTICLE 9 : DROIT APPLICABLE ET JURIDICTION COMPÉTENTE
      </Text>
      <Text>
        La législation française s'applique au présent contrat. En cas d'absence
        de résolution amiable d'un litige né entre les parties, les tribunaux
        français seront seuls compétents pour en connaître. Pour toute question
        relative à l’application des présentes CGU, vous pouvez joindre
        l’éditeur aux coordonnées inscrites à l’ARTICLE 1.
      </Text>
      <Text style={styles.heading}>ARTICLE 10 : MODIFICATIONS DES CGU</Text>
      <Text>
        Petal Patrol se réserve le droit de modifier unilatéralement et à tout
        moment les présentes CGU. Les modifications seront effectives dès leur
        publication sur le site. Il est de la responsabilité de l'Utilisateur de
        consulter régulièrement les CGU mises à jour.
      </Text>

      <Text style={styles.heading}>ARTICLE 11 : CONTACT</Text>
      <Text>
        Pour toute question concernant les CGU, l'Utilisateur peut contacter
        Petal Patrol à l'adresse email suivante : arosaje@plant.vg.
      </Text>

      <Text style={styles.heading}>ARTICLE 12 : VALIDITÉ DES CGU</Text>
      <Text>
        Si l'une quelconque des dispositions des présentes CGU est déclarée
        nulle ou inapplicable en tout ou en partie, les autres dispositions
        demeureront en vigueur et applicables.
      </Text>

      <Text style={styles.heading}>ARTICLE 13 : LANGUE</Text>
      <Text>
        Les présentes CGU sont rédigées en français. En cas de traduction, la
        version française fera foi.
      </Text>

      <Text style={styles.heading}>ARTICLE 14 : DATE D'EFFET</Text>
      <Text>Les présentes CGU entrent en vigueur à partir du 01/02/2024.</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16, // Ajout de la marge sur les côtés
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20, // Ajout d'une marge sous le titre
    textAlign: "center",
    color: COLORS.secondary,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify", // Justification du texte
  },
});

export default CGUComponent;
